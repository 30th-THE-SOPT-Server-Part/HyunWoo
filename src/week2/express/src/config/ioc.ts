import {Controller} from "@tsoa/runtime";
import {Container, decorate, injectable} from "inversify";
import {buildProviderModule} from "inversify-binding-decorators";

const iocContainer = new Container();

decorate(injectable(), Controller);
iocContainer.load(buildProviderModule());

export {iocContainer};
