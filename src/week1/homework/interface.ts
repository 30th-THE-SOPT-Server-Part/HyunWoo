interface ServerPart {
    name: string;
    age: number;
    group: string;
    mbti: string[];
}

const serverPart: ServerPart = {
    name: "이현우",
    age: 26,
    group: "OB",
    mbti: ["INFP"]
}

const serverMembers: ServerPart[] = [
    {
        name: "이현우",
        age: 26,
        group: "OB",
        mbti: ["INFP"]
    },
    {
        name: "이승헌",
        age: 25,
        group: "OB",
        mbti: ["ENFJ"]
    }
];

console.log(serverMembers);

interface Closet {
    name: string;
    shirt: number;
    pants: number;
    hat?: number;
    sunglassess?: number;
}

const closet: Closet[] = [
    {
        name: "이현우",
        shirt: 4,
        pants: 3,
        hat: 0
    }
]
