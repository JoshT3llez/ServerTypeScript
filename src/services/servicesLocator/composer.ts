import {Connection} from "mysql2"
import {DependencyLocator} from "./dependenciesLocator";
import database from "../database"
import {UserUtils} from "../../utils/users"


const di = DependencyLocator.getInstance();

const types = {
    database: "database-conection",
    users: "users-utils"
}

function getDatabase(): Connection{
    return di.get(types.database);
}

function init(){
    di.bindLazySingleton(types.database, ()=> database);
    di.bindFactory(types.users,()=> new UserUtils(getDatabase()))
}
