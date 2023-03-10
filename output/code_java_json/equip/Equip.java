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



public final class Equip {
    public Equip(JsonObject __json__) { 
        id = __json__.get("id").getAsInt();
        name = __json__.get("name").getAsString();
        { com.google.gson.JsonArray _json0_ = __json__.get("hole_list").getAsJsonArray(); java.util.List<com.example.luban_code.equip.Hole> _tmp_holeList = new java.util.ArrayList(_json0_.size()); for(JsonElement _e0 : _json0_) { com.example.luban_code.equip.Hole _v0;  _v0 = new com.example.luban_code.equip.Hole(_e0.getAsJsonObject());  _tmp_holeList.add(_v0); } holeList = Collections.unmodifiableList(_tmp_holeList);  }
        __json__.get("desc").getAsJsonObject().get("key").getAsString(); desc = __json__.get("desc").getAsJsonObject().get("text").getAsString();
    }

    public Equip(int id, String name, java.util.List<com.example.luban_code.equip.Hole> hole_list, String desc ) {
        this.id = id;
        this.name = name;
        this.holeList = hole_list;
        this.desc = desc;
    }

    public static Equip deserializeEquip(JsonObject __json__) {
        return new Equip(__json__);
    }

    /**
     * 这是id
     */
    public final int id;
    /**
     * 名字
     */
    public final String name;
    /**
     * 槽位列表
     */
    public final java.util.List<com.example.luban_code.equip.Hole> holeList;
    /**
     * key
     */
    public final String desc;


    public void resolve(java.util.Map<String, Object> _tables) {
        for(com.example.luban_code.equip.Hole _e : holeList) { if (_e != null) _e.resolve(_tables); }
    }

    @Override
    public String toString() {
        return "{ "
        + "id:" + id + ","
        + "name:" + name + ","
        + "holeList:" + holeList + ","
        + "desc:" + desc + ","
        + "}";
    }
}
