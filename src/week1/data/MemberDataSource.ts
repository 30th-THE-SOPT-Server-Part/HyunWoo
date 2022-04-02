import { injectable } from "inversify";
import { Member } from "../domain/entity/Member";

export interface MemberDataSource {
    retrieve(): Array<Member>
}

@injectable()
export class SoptMemberDataSource implements MemberDataSource {
    retrieve(): Member[] {
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
