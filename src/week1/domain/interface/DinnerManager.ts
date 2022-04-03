import Member from "../entity/Member"

export default interface DinnerManager {
    member: Member[],
    organize(): void
}
