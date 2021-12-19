import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export function SkillCard({skill}){
    return (
        <TouchableOpacity style={styles.buttonSkill} >
        <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: "#1F1E25",
        padding: 20,
        borderRadius: 50,
        alignItems: "center",
        marginVertical: 10,
      },
      textSkill: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 18,
      },
})