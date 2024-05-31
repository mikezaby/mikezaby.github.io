"use client";

import { TogglePlay } from "@/components";
import { Engine, ModuleType } from "blibliki";
import { useEffect, useMemo, useState } from "react";

export default function Example() {
  const [isLoaded, setIsLoaded] = useState<boolean>();

  useEffect(() => {
    if (isLoaded) return;

    setIsLoaded(true);
  }, [isLoaded]);

  const onToggle = useMemo(() => {
    if (!isLoaded) return;

    return getOnToggle();
  }, [isLoaded]);

  if (!onToggle) return null;

  return <TogglePlay onToggle={onToggle} />;
}

const getOnToggle = () => {
  const context = new AudioContext();
  const engine = new Engine(context);

  const osc = engine.addModule({
    name: "osc",
    moduleType: ModuleType.Oscillator,
    props: { wave: "sine", frequency: 440 },
  });

  const lfo = engine.addModule({
    name: "osc",
    moduleType: ModuleType.Oscillator,
    props: { wave: "sine", frequency: 2 },
  });

  const vol = engine.addModule({
    name: "vol",
    moduleType: ModuleType.Volume,
    props: { volume: 0.01 },
  });

  const master = engine.addModule({
    name: "master",
    moduleType: ModuleType.Master,
    props: {},
  });

  engine.addRoute({
    source: { moduleId: osc.id, ioName: "out" },
    destination: { moduleId: vol.id, ioName: "in" },
  });
  engine.addRoute({
    source: { moduleId: lfo.id, ioName: "out" },
    destination: { moduleId: osc.id, ioName: "detune" },
  });
  engine.addRoute({
    source: { moduleId: vol.id, ioName: "out" },
    destination: { moduleId: master.id, ioName: "in" },
  });

  return (isPlaying: boolean) => {
    if (isPlaying) {
      engine.start();
    } else {
      engine.stop();
    }
  };
};
