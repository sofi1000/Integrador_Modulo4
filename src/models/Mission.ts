export enum MissionType {
    Main = 'Main',
    Side = 'Side',
    Event = 'Event'
}



export class Mission {
    private _description: string;
    private _difficulty: number;
    private _reward: number;
    
    constructor(description: string, difficulty: number, reward: number){
        this._description = description;
        this._difficulty = difficulty;
        this._reward = reward
    }

    public get description(): string{
        return this._description;
    }
    public set description(description: string){
        this._description=description;
    }
    public get difficulty(): number{
        return this._difficulty;
    }
    public set difficulty(difficulty: number){
        this._difficulty=difficulty;
    }
    public get reward(): number{
        return this._reward
    }
    public set reward(reward:number){
        this._reward=reward;
    }
}
export default Mission;