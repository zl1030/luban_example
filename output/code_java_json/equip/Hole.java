//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
package com.example.luban_code.equip;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import java.util.Collections;



public final class Hole {
    public Hole(JsonObject __json__) { 
        id = __json__.get("id").getAsInt();
    }

    public Hole(int id ) {
        this.id = id;
    }

    public static Hole deserializeHole(JsonObject __json__) {
        return new Hole(__json__);
    }

    /**
     * 宝石id
     */
    public final int id;


    public void resolve(java.util.Map<String, Object> _tables) {
    }

    @Override
    public String toString() {
        return "{ "
        + "id:" + id + ","
        + "}";
    }
}