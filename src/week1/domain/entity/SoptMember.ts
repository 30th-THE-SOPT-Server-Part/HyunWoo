import Member from "../entity/Member";

export default class SoptMember {
    static retrieve() : Array<Member> {
        return [
            {
                name: '채정아',
                group: 'ob'
            },
            {
                name: '김동재',
                group: 'yb'
            },
            {
                name: '강민재',
                group: 'yb'
            },
            {
                name: '김루희',
                group: 'ob'
            },
            {
                name: '박진수',
                group: 'ob'
            }
        ]
    }
}
