//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
package com.example.luban_code.item;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import java.util.Collections;



public final class ItemExchange {
    public ItemExchange(JsonObject __json__) { 
        id = __json__.get("id").getAsInt();
        num = __json__.get("num").getAsInt();
    }

    public ItemExchange(int id, int num ) {
        this.id = id;
        this.num = num;
    }

    public static ItemExchange deserializeItemExchange(JsonObject __json__) {
        return new ItemExchange(__json__);
    }

    /**
     * 道具id
     */
    public final int id;
    /**
     * 道具数量
     */
    public final int num;


    public void resolve(java.util.Map<String, Object> _tables) {
    }

    @Override
    public String toString() {
        return "{ "
        + "id:" + id + ","
        + "num:" + num + ","
        + "}";
    }
}
