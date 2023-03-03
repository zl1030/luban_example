import * as fs from 'fs'
import {Tables} from "./models/Types";

// json数据目录
const JSON_PATH = '../../output/data_json/';

// 返回指定配表的json数据
const jsonLoader = (path: string) => {
    const jsonString = fs.readFileSync(JSON_PATH + path + '.json', 'utf-8');
    return JSON.parse(jsonString);
};

// 实例化所有配表
const tables = new Tables(jsonLoader);

console.log("-------遍历item表:")
tables.TbItem.getDataList().forEach((item) => {
    console.log(item)
})

console.log("-------获取指定item:")
console.log(tables.TbItem.getDataMap().get(10001))

console.log("-------遍历equip表:")
tables.TbEquip.getDataList().forEach((equip) => {
    console.log(equip)
})


