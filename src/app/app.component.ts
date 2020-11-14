import { Component } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";

@Component({
  selector: "chart-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 70, 81, 59, 65, 69, 78], label: "Series A" }
  ];
  public lineChartLabels: Label[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August"
  ];
  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: "grey",
      backgroundColor: "rgba(255,90,50,0.4)"
    }
  ];
  public lineChartLegend = true;
  public lineChartType = "bar";
  public lineChartPlugins = [];

  constructor() {}
}
