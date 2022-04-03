import { inject, injectable } from "inversify";
import SERVICE_IDENTIFIER from "../constants/identifier";
import { MemberDataSource } from "../data/MemberDataSource";
import DinnerManager from "./interface/DinnerManager";
import Matcher from "./interface/Matcher";
import Member from "../domain/entity/Member";

@injectable()
export default class SoptDinnerManager implements DinnerManager {
    private matcher: Matcher;
    private memberDataSource: MemberDataSource;
    public member: Member[];
    public constructor(
        @inject(SERVICE_IDENTIFIER.MATCHER) matcher: Matcher,
        @inject(SERVICE_IDENTIFIER.MEMBER) memberDataSource: MemberDataSource
    ) {
        this.matcher = matcher;
        this.memberDataSource = memberDataSource;
        this.member = memberDataSource.retrieve();    
    }

    organize() {
        let sortedMember = this.matcher.execute(this.member);
        console.log(`오늘의 저녁 식사 멤버는 ${sortedMember[0].name}, ${sortedMember[1].name}`);
    }
}