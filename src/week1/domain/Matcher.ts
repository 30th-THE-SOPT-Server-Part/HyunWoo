import { Member } from "../domain/entity/Member";

export default interface Matcher {
    execute(): Array<Member>
}
