"use client";

import { TogglePlay } from "@/components";
import Engine, { ModuleType } from "dd-audio-engine";
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
  let osc = Engine.addModule<ModuleType.Oscillator>({
    name: "osc",
    moduleType: ModuleType.Oscillator,
    props: { wave: "sine", frequency: 200 },
  });

  let vol = Engine.addModule<ModuleType.Volume>({
    name: "vol",
    moduleType: ModuleType.Volume,
    props: { volume: 100 },
  });

  const master = Engine.addModule<ModuleType.Master>({
    name: "master",
    moduleType: ModuleType.Master,
    props: {},
  });

  osc = Engine.updateModule({
    id: osc.id,
    moduleType: osc.moduleType,
    changes: { props: { frequency: 440 } },
  });
  vol = Engine.updateModule({
    id: vol.id,
    moduleType: vol.moduleType,
    changes: { props: { volume: 0.01 } },
  });

  Engine.connect(osc.id, vol.id);
  Engine.connect(vol.id, master.id);

  setInterval(() => {
    Engine.updateModule({
      id: osc.id,
      moduleType: osc.moduleType,
      changes: { props: { frequency: 2000 * Math.random() } },
    });
  }, 1000);

  return (isPlaying: boolean) => {
    if (isPlaying) {
      Engine.start();
    } else {
      Engine.stop();
      // This is temporary, we will implement an automate solution for this
      Engine.connect(osc.id, vol.id);
    }
  };
};
