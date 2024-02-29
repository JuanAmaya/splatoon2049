export default function setRemainingTime(endTime: string) {
  const startTimeFormatted = new Date();
  const endTimeFormatted = new Date(endTime);
  let remainingMillis: any;

  remainingMillis = endTimeFormatted.getTime() - startTimeFormatted.getTime();

  const totalHours = Math.floor(remainingMillis / 3600000);
  const totalMins = Math.floor((remainingMillis % 3600000) / 60000);
  const totalSecs = Math.floor((remainingMillis % 60000) / 1000).toFixed(0);

  const formattedRemainingTime = `${totalHours}H ${totalMins}M ${totalSecs}S`;

  return formattedRemainingTime;
}
