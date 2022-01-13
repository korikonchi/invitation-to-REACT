/**
 * HOF to display the distance from  today's date to target date
 * in days, hours minutes and seconds.
 *
 * @param {Date | String} targetDate - date to complete countdown
 * @param {Function} callback - function that receives as arguments and object in the format of  { d,h,m,s}
 */
export function countDown(targetDate, callback) {
  const dayMs = 1000 * 60 * 60 * 24;
  const hourMs = 1000 * 60 * 60;
  const minMs = 1000 * 60;
  if (!targetDate) throw new Error("Please provide a target Date");
  // Set the date we're counting down to
  const TARGET_DATE = new Date(targetDate).getTime();

  const timerId = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();
    // Find the distance between now and the count down date
    const distance = TARGET_DATE - now;

    callback({
      d: Math.max(Math.floor(distance / dayMs), 0),
      h: Math.max(Math.floor((distance % dayMs) / hourMs), 0),
      m: Math.max(Math.floor((distance % hourMs) / minMs), 0),
      s: Math.max(Math.floor((distance % minMs) / 1000), 0),
    });
  }, 1000);

  return timerId;
}
