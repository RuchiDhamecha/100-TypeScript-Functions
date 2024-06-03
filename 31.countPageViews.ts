function countPageViews(pageViews, country, interval) {
    const filteredViews = pageViews.filter(view => view.country === country);

 const totalViews = filteredViews.reduce((sum, view) => {

   return view.date >= interval.startDate && view.date <= interval.endDate ? sum + view.count : sum;
 }, 0);

 return totalViews;
}

export { countPageViews };
