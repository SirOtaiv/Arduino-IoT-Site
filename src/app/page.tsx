"use client";
import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Lightbulb, LightbulbOutlined } from '@mui/icons-material';
import mqtt from "mqtt";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [isConnected, setIsConnected] = useState(false);
  const client = mqtt.connect("wss://test.mosquitto.org:8081");

  useEffect(() => {
    client.on("connect", () => {
      setIsConnected(true);
      client.subscribe("UnoController", (err) => {
        if (!err) {
          console.log("Connected");
        } else {
          console.log(err);
        }
      });
    });
  }, []);

  useEffect(() => {
    if (isConnected) {
      client.publish("UnoController", theme === "light" ? "off" : "on");
    }
  }, [theme, isConnected]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Typography variant="h1">Light Controller</Typography>
        <Button 
          variant="contained" 
          onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
          startIcon={theme === "light" ?  <Lightbulb />: <LightbulbOutlined />}
        >
          {theme === "light" ? "Apagar" : "Acender"}
        </Button>
      </main>
    </div>
  );
}
