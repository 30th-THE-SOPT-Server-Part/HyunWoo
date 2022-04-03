import Member from "./entity/Member";
import Matcher from "./interface/Matcher";
import { injectable } from "inversify";

@injectable()
export default class RandomMatcher implements Matcher {
    execute(members: Array<Member>): Member[] {
        members.sort(() => Math.random() - 0.5);
        return members;
    }
}
