"use client"
import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Lightbulb, LightbulbOutlined } from '@mui/icons-material';

export default function Home() {
  const [theme, setTheme] = useState<String>("light")

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Typography variant="h1">Light Controller</Typography>
        <Button 
          variant="contained" 
          onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
          startIcon={theme === "light" ? <LightbulbOutlined /> : <Lightbulb />}
        >
          {theme === "light" ? "Acender" : "Apagar"}
        </Button>
      </main>
    </div>
  );
}
