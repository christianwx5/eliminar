import {SociosController} from "./controller/SociosController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: SociosController,
    action: "all"
}, {
    method: "get",
    route: "/users/:limit/:offset",
    controller: SociosController,
    action: "limit"
},{
    method: "get",
    route: "/users/:id",
    controller: SociosController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: SociosController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: SociosController,
    action: "remove"
}];