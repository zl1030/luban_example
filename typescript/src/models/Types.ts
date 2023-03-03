//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------


export namespace item {
export enum EQuality {
    /**
     * 最差品质
     */
    WHITE = 1,
    /**
     * 蓝色的
     */
    BLUE = 2,
    /**
     * 紫色的
     */
    PURPLE = 3,
    /**
     * 最高品质
     */
    RED = 4,
}
}

export namespace test {
export enum AccessFlag {
    WRITE = 1,
    READ = 2,
    TRUNCATE = 4,
    NEW = 8,
    /**
     * 位标记使用示例
     */
    READ_WRITE = WRITE|READ,
}
}

export namespace item {
export class TbItem{
    private _dataMap: Map<number, item.Item>
    private _dataList: item.Item[]
    constructor(_json_: any) {
        this._dataMap = new Map<number, item.Item>()
        this._dataList = []
        for(var _json2_ of _json_) {
            let _v: item.Item
            _v = new item.Item(_json2_)
            this._dataList.push(_v)
            this._dataMap.set(_v.id, _v)
        }
    }

    getDataMap(): Map<number, item.Item> { return this._dataMap; }
    getDataList(): item.Item[] { return this._dataList; }

    get(key: number): item.Item | undefined { return this._dataMap.get(key); }

    resolve(_tables: Map<string, any>) {
        for(var v of this._dataList) {
            v.resolve(_tables)
        }
    }

}
}



export namespace item {
export class Item {

    constructor(_json_: any) {
        if (_json_.id === undefined) { throw new Error() }
        this.id = _json_.id
        if (_json_.name === undefined) { throw new Error() }
        this.name = _json_.name
        if (_json_.desc === undefined) { throw new Error() }
        this.desc = _json_.desc
        if (_json_.price === undefined) { throw new Error() }
        this.price = _json_.price
        if (_json_.upgrade_to_item_id === undefined) { throw new Error() }
        this.upgradeToItemId = _json_.upgrade_to_item_id
        if(_json_.expire_time != undefined) { this.expireTime = _json_.expire_time } else { this.expireTime = undefined }
        if (_json_.batch_useable === undefined) { throw new Error() }
        this.batchUseable = _json_.batch_useable
        if (_json_.quality === undefined) { throw new Error() }
        this.quality = _json_.quality
        if (_json_.exchange_stream === undefined) { throw new Error() }
        this.exchangeStream = new item.ItemExchange(_json_.exchange_stream)
        if (_json_.exchange_list === undefined) { throw new Error() }
        { this.exchangeList = []; for(let _ele of _json_.exchange_list) { let _e : item.ItemExchange; _e = new item.ItemExchange(_ele); this.exchangeList.push(_e);}}
        if (_json_.exchange_column === undefined) { throw new Error() }
        this.exchangeColumn = new item.ItemExchange(_json_.exchange_column)
    }

    /**
     * 这是id
     */
    readonly id: number
    /**
     * 名字
     */
    readonly name: string
    /**
     * 描述
     */
    readonly desc: string
    /**
     * 价格
     */
    readonly price: number
    /**
     * 引用当前表
     */
    readonly upgradeToItemId: number
    upgradeToItemId_Ref : item.Item = undefined!
    /**
     * 过期时间
     */
    readonly expireTime: number|undefined
    /**
     * 能否批量使用
     */
    readonly batchUseable: boolean
    /**
     * 品质
     */
    readonly quality: item.EQuality
    /**
     * 道具兑换配置
     */
    readonly exchangeStream: item.ItemExchange
    readonly exchangeList: item.ItemExchange[]
    /**
     * 道具兑换配置
     */
    readonly exchangeColumn: item.ItemExchange

    resolve(_tables: Map<string, any>) {
        this.upgradeToItemId_Ref = (_tables.get('item.TbItem') as item.TbItem).get(this.upgradeToItemId)!
        if (this.exchangeStream != null) { this.exchangeStream.resolve(_tables);}
        for(let _e of this.exchangeList) { if (_e != null ) {_e.resolve(_tables);} }
        if (this.exchangeColumn != null) { this.exchangeColumn.resolve(_tables);}
    }
}

}



export namespace item {
export class ItemExchange {

    constructor(_json_: any) {
        if (_json_.id === undefined) { throw new Error() }
        this.id = _json_.id
        if (_json_.num === undefined) { throw new Error() }
        this.num = _json_.num
    }

    /**
     * 道具id
     */
    readonly id: number
    /**
     * 道具数量
     */
    readonly num: number

    resolve(_tables: Map<string, any>) {
    }
}

}

export namespace equip {
export class TbEquip{
    private _dataMap: Map<number, equip.Equip>
    private _dataList: equip.Equip[]
    constructor(_json_: any) {
        this._dataMap = new Map<number, equip.Equip>()
        this._dataList = []
        for(var _json2_ of _json_) {
            let _v: equip.Equip
            _v = new equip.Equip(_json2_)
            this._dataList.push(_v)
            this._dataMap.set(_v.id, _v)
        }
    }

    getDataMap(): Map<number, equip.Equip> { return this._dataMap; }
    getDataList(): equip.Equip[] { return this._dataList; }

    get(key: number): equip.Equip | undefined { return this._dataMap.get(key); }

    resolve(_tables: Map<string, any>) {
        for(var v of this._dataList) {
            v.resolve(_tables)
        }
    }

}
}



export namespace equip {
export class Equip {

    constructor(_json_: any) {
        if (_json_.id === undefined) { throw new Error() }
        this.id = _json_.id
        if (_json_.name === undefined) { throw new Error() }
        this.name = _json_.name
        if (_json_.hole_list === undefined) { throw new Error() }
        { this.holeList = []; for(let _ele of _json_.hole_list) { let _e : equip.Hole; _e = new equip.Hole(_ele); this.holeList.push(_e);}}
        if (_json_.desc === undefined) { throw new Error() }
        this.desc = _json_.desc['text']
    }

    /**
     * 这是id
     */
    readonly id: number
    /**
     * 名字
     */
    readonly name: string
    /**
     * 槽位列表
     */
    readonly holeList: equip.Hole[]
    /**
     * key
     */
    readonly desc: string

    resolve(_tables: Map<string, any>) {
        for(let _e of this.holeList) { if (_e != null ) {_e.resolve(_tables);} }
    }
}

}



export namespace equip {
export class Hole {

    constructor(_json_: any) {
        if (_json_.id === undefined) { throw new Error() }
        this.id = _json_.id
    }

    /**
     * 宝石id
     */
    readonly id: number

    resolve(_tables: Map<string, any>) {
    }
}

}


type JsonLoader = (file: string) => any

export class Tables {
    private _TbItem: item.TbItem
    get TbItem(): item.TbItem  { return this._TbItem;}
    private _TbEquip: equip.TbEquip
    get TbEquip(): equip.TbEquip  { return this._TbEquip;}

    constructor(loader: JsonLoader) {
        let tables = new Map<string, any>()
        this._TbItem = new item.TbItem(loader('item_tbitem'))
        tables.set('item.TbItem', this._TbItem)
        this._TbEquip = new equip.TbEquip(loader('equip_tbequip'))
        tables.set('equip.TbEquip', this._TbEquip)

        this._TbItem.resolve(tables)
        this._TbEquip.resolve(tables)
    }
}