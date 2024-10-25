import '../css/statsHome.css'
import { LineChart } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts';
import { BarChart, barElementClasses } from '@mui/x-charts';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontSize: 20, // Change this value to your desired font size
      color: 'white',
    },
  });

const StatsHome = () => {
    return ( 
        <div className="statsHomeContainer">
            <div className="statsTitle"><h2>Facts and Statistics</h2></div>
            <div className="CardContainer">
            <div className='statoutline'>
            <div className="stat1">
                <div className="statHeader"><h3>Fentanyl Overdose Deaths (2010 - 2021)</h3></div>
                <ThemeProvider theme={theme}>
                <LineChart
                sx={(theme) => ({
                    [`.${axisClasses.root}`]: {
                      [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                        stroke: 'white',
                        strokeWidth: 3,
                      },
                      [`.${axisClasses.tickLabel}`]: {
                        fill: 'white',
                        fontSize: '50px',
                      },
                    },
                  })}
                    xAxis={[{ labelColor: 'white', id: "Year", label: "Year", data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021] }]}
                    series={[
                        {
                        id: "Deaths (in thousands)", data: [2.6, 2.6, 3.1, 3.1, 4.2, 8.2, 18.3, 28.4, 31.3, 36.3, 56.5, 71], label: "Deaths (in thousands)", color: '#F77F00', labelColor: 'green',
                        },
                    ]}
                    width={400}
                    height={360}
                />
                </ThemeProvider>
                {/* <div className="statFooter"><p>This chart illustrates the alarming rise in fentanyl-related overdose deaths in the United States from 2010 to 2021. The dramatic increase, especially in recent years, highlights the urgent need for awareness, prevention, and support efforts. Each point represents 1,000 lives lost, underscoring the devastating impact of fentanyl on families and communities nationwide.</p></div> */}
            </div>
            </div>

            <div className='statoutline'>
            <div className="stat1">
                <div className="statHeader"><h3>Age Distribution</h3></div>
                <PieChart
                    series={[
                        {
                        data: [
                            { id: 0, value: 11, label: '15-24', color: "#e65100" },
                            { id: 1, value: 33, label: '25-34', color: "#f57c00" },
                            { id: 2, value: 27, label: '35-44', color: "#ff9800" },
                            { id: 3, value: 17, label: '45-54', color: "#ffb74d" },
                            { id: 4, value: 12, label: '55+', color: "#ffe0b2" },
                        ],
                        },
                    ]}
                    width={320}
                    height={360}
                />
                {/*<div className="statFooter"><p>The majority of fentanyl-related deaths occur among young adults aged 18-34, a devastating reality for families who thought their children were safe. However, the crisis is creeping into even younger age groups. Increasingly, we are seeing cases among teenagers and children, who may inadvertently encounter fentanyl through counterfeit pills or exposure to family members struggling with addiction.</p></div>*/}
            </div>
            </div>
            
            <div className='statoutline'>
            <div className="stat1">
                <div className="statHeader"><h3>Awareness</h3></div>
                <BarChart
                sx={(theme) => ({
                    [`.${axisClasses.root}`]: {
                      [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                        stroke: 'white',
                        strokeWidth: 3,
                      },
                      [`.${axisClasses.tickLabel}`]: {
                        fill: 'white',
                        fontSize: '50px',
                      },
                    },
                  })}
                xAxis={[{ scaleType: 'band', data: ['18-24', '25-34', '35-44', '45-54', '55+'] }]}
                series={[
                    {
                      data: [60, 75, 80, 70, 50], // This should have values for all xAxis categories
                      label: 'Awareness (%)', // Optional: a label for the series
                      max: 100,
                      color: '#f57c00'
                    },
                  ]}
                width={310}
                height={360}
                />
                {/*<div className="statFooter"><p>This bar chart illustrates the levels of awareness about fentanyl and its dangers across various demographics. Each bar represents the percentage of individuals who recognize the risks associated with fentanyl use. By identifying gaps in knowledge, we can target our educational efforts effectively. Increased awareness is a vital step toward prevention, as it empowers individuals to make informed decisions and seek help when needed.</p></div>*/}
            </div>
            </div>

            <div className='statoutline'>
            <div className="stat1">
                <div className="statHeader"><h3>Treatment Success Rates</h3></div>
                <BarChart
                sx={(theme) => ({
                    [`.${axisClasses.root}`]: {
                      [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                        stroke: 'white',
                        strokeWidth: 3,
                      },
                      [`.${axisClasses.tickLabel}`]: {
                        fill: 'white',
                        fontSize: '50px',
                      },
                    },
                  })}
                xAxis={[{ scaleType: 'band', data: ['18-24', '25-34', '35-44', '45-54', '55+'] }]}
                series={[
                    {
                      data: [60, 75, 80, 70, 50], // This should have values for all xAxis categories
                      label: 'Awareness (%)', // Optional: a label for the series
                      max: 100,
                      color: '#f57c00'
                    },
                  ]}
                width={305}
                height={360}
                />
                {/*<div className="statFooter"><p>This bar chart illustrates the levels of awareness about fentanyl and its dangers across various demographics. Each bar represents the percentage of individuals who recognize the risks associated with fentanyl use. By identifying gaps in knowledge, we can target our educational efforts effectively. Increased awareness is a vital step toward prevention, as it empowers individuals to make informed decisions and seek help when needed.</p></div>*/}
            </div>
            </div></div>
        </div>
     );
}
 
export default StatsHome;