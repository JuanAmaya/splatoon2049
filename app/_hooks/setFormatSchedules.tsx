import setGetTime from "./setGetTime";

type regularSchedule = {
  regularMatchSetting?: {
    __typeName: string;
    vsStages: Array<{
      name: string;
      image: {
        url: string;
      };
      id: string;
    }>;
    vsRule: {
      name: string;
      id: string;
    };
  };
};

type bankaraSchedule = {
  bankaraMatchSettings: Array<{
    __typeName: string;
    vsStages: Array<{
      name: string;
      image: {
        url: string;
      };
      id: string;
    }>;
    vsRule: {
      name: string;
      id: string;
    };
  }>;
};

type xSchedule = {
  xMatchSetting?: {
    __typeName: string;
    vsStages: Array<{
      name: string;
      image: {
        url: string;
      };
      id: string;
    }>;
    vsRule: {
      name: string;
      id: string;
    };
  };
};

type diffSchedules = {
  nodes: Array<{
    startTime: string;
    endTime: string;
    matchSetting: regularSchedule | bankaraSchedule | xSchedule;
  }>;
};

type dataCard = {
  battleTitle: string;
  modeTitle: string;
  currentTime: string;
  nextModeTitle: string;
  nextTime: string;
  stages: Array<{
    name: string;
    image: {
      url: string;
    };
    id: string;
  }>;
};

type battleData = {
  battleSchedule: diffSchedules;
  battleType: string;
};

function isRegularSchedule(object: unknown): object is regularSchedule {
  if (object !== null && typeof object === "object") {
    return "regularMatchSetting" in object;
  }

  return false;
}

function isBankaraSchedule(object: unknown): object is bankaraSchedule {
  if (object !== null && typeof object === "object") {
    return "bankaraMatchSettings" in object;
  }

  return false;
}

function isXSchedule(object: unknown): object is xSchedule {
  if (object !== null && typeof object === "object") {
    return "xMatchSetting" in object;
  }

  return false;
}

export default function setFormatSchedules(battleData: battleData) {
  let formattedTitle = "Battle Title";
  let formattedModeTitle = "Mode Title";
  let formattedNextModeTitle = "Next Mode Title";
  let formattedStages = [
    {
      id: "Stage ID",
      name: "Stage Name",
      image: {
        url: "Stage URL",
      },
    },
    {
      id: "Stage ID",
      name: "Stage Name",
      image: {
        url: "Stage URL",
      },
    },
  ];

  if (battleData.battleSchedule === undefined) {
    return;
  }

  if (
    isRegularSchedule(battleData.battleSchedule.nodes[0]) &&
    isRegularSchedule(battleData.battleSchedule.nodes[1])
  ) {
    formattedTitle = "Regular Battle";
    formattedModeTitle =
      battleData.battleSchedule.nodes[0].regularMatchSetting?.vsRule.name!;
    formattedNextModeTitle =
      battleData.battleSchedule.nodes[1].regularMatchSetting?.vsRule.name!;
    formattedStages =
      battleData.battleSchedule.nodes[0].regularMatchSetting?.vsStages!;
  } else if (
    isBankaraSchedule(battleData.battleSchedule.nodes[0]) &&
    isBankaraSchedule(battleData.battleSchedule.nodes[1]) &&
    battleData.battleType === "BankaraMatchSettingSeries"
  ) {
    formattedTitle = "Anarchy Battle Series";
    formattedModeTitle =
      battleData.battleSchedule.nodes[0].bankaraMatchSettings[0]?.vsRule.name!;
    formattedNextModeTitle =
      battleData.battleSchedule.nodes[1].bankaraMatchSettings[0]?.vsRule.name!;
    formattedStages =
      battleData.battleSchedule.nodes[0].bankaraMatchSettings[0]?.vsStages!;
  } else if (
    isBankaraSchedule(battleData.battleSchedule.nodes[0]) &&
    isBankaraSchedule(battleData.battleSchedule.nodes[1]) &&
    battleData.battleType === "BankaraMatchSettingOpen"
  ) {
    formattedTitle = "Anarchy Battle Open";
    formattedModeTitle =
      battleData.battleSchedule.nodes[0].bankaraMatchSettings[1]?.vsRule.name!;
    formattedNextModeTitle =
      battleData.battleSchedule.nodes[1].bankaraMatchSettings[1]?.vsRule.name!;
    formattedStages =
      battleData.battleSchedule.nodes[0].bankaraMatchSettings[1]?.vsStages!;
  } else if (
    isXSchedule(battleData.battleSchedule.nodes[0]) &&
    isXSchedule(battleData.battleSchedule.nodes[1])
  ) {
    formattedTitle = "X Battle";
    formattedModeTitle =
      battleData.battleSchedule.nodes[0].xMatchSetting?.vsRule.name!;
    formattedNextModeTitle =
      battleData.battleSchedule.nodes[1].xMatchSetting?.vsRule.name!;
    formattedStages =
      battleData.battleSchedule.nodes[0].xMatchSetting?.vsStages!;
  }

  const formattedTime = setGetTime(
    battleData.battleSchedule.nodes[0].startTime!,
    battleData.battleSchedule.nodes[0].endTime!
  );

  const formattedNextTime = setGetTime(
    battleData.battleSchedule.nodes[1].startTime!,
    battleData.battleSchedule.nodes[1].endTime!
  );

  const scheduleData: dataCard = {
    battleTitle: formattedTitle,
    modeTitle: formattedModeTitle,
    currentTime: formattedTime,
    nextModeTitle: formattedNextModeTitle,
    nextTime: formattedNextTime,
    stages: formattedStages,
  };

  return scheduleData;
}
