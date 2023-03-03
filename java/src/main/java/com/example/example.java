package com.example;

import com.google.gson.JsonParser;
import com.google.gson.stream.JsonReader;
import com.example.luban_code.Tables;
import com.example.luban_code.equip.Equip;
import com.example.luban_code.item.Item;
import java.io.FileReader;
import java.io.IOException;

/**
 * Hello world!
 */
public class example {

    public static void main(String[] args) throws IOException {

        final String TABLE_PATH = "..\\output\\data_json\\";
        final String FILE_TYPE = ".json";

        Tables tables = new Tables(file -> JsonParser.parseReader(
            new JsonReader(new FileReader(TABLE_PATH + file + FILE_TYPE))));

        for (Item item : tables.getTbItem().getDataList()) {
            System.out.println(item.toString());
        }
        for (Equip equip : tables.getTbEquip().getDataList()) {
            System.out.println(equip.toString());
        }
    }
}
