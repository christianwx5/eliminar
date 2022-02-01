"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var SociosController_1 = require("./controller/SociosController");
exports.Routes = [{
        method: "get",
        route: "/users",
        controller: SociosController_1.SociosController,
        action: "all"
    }, {
        method: "get",
        route: "/users/:limit/:offset",
        controller: SociosController_1.SociosController,
        action: "limit"
    }, {
        method: "get",
        route: "/users/:id",
        controller: SociosController_1.SociosController,
        action: "one"
    }, {
        method: "post",
        route: "/users",
        controller: SociosController_1.SociosController,
        action: "save"
    }, {
        method: "delete",
        route: "/users/:id",
        controller: SociosController_1.SociosController,
        action: "remove"
    }];
//# sourceMappingURL=routes.js.map