import Member from "../entity/Member";

export default interface Matcher {
    execute(members: Array<Member>): Array<Member>
}
