chrome.devtools.network.onRequestFinished.addListener((request) => {
  console.log("request", request)
});

export default () => {
  return (
    <h2>
      Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
    </h2>
  )
}
