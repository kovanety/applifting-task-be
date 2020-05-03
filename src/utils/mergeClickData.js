export const mergeClickData = data => {
  return {
    team_clicks: data[0].clicks,
    your_clicks: data[1].clicks
  }
}
