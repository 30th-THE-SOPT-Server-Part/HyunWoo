import { Container } from "inversify";
import "reflect-metadata";
import SERVICE_IDENTIFIER from "../constants/identifier";
import {
    MemberDataSource,
    SoptMemberDataSource
} from "../data/MemberDataSource";
import Member from "../domain/entity/Member";
import DinnerManager from "../domain/interface/DinnerManager";
import Matcher from "../domain/interface/Matcher";
import RandomMatcher from "../domain/RandomMatcher";
import SoptDinnerManager from "../domain/SoptDinnerManager";

const container = new Container();

container.bind<MemberDataSource>(SERVICE_IDENTIFIER.MEMBER).to(SoptMemberDataSource);
container.bind<Matcher>(SERVICE_IDENTIFIER.MATCHER).to(RandomMatcher);
container.bind<DinnerManager>(SERVICE_IDENTIFIER.DINNER).to(SoptDinnerManager);

// export default: 다른 파일에서 이 변수를 사용하게 하기 위해 export를 붙여줘야한다
// Kotlin에서는 이런거 다 해줬는데;;
export default container;
