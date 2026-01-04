function Clock() {
  var date = new Date().toLocaleDateString();
  var time = new Date().toLocaleTimeString();
  return (
    <div class="ClockHeading">
      <h1>Clock Component In React created in React</h1>
      <div class="clock_Subheading">
        <h2>The Time is : {time}</h2>
        <h2>The Date is : {date}</h2>
      </div>
    </div>
  );
}

export default Clock;
