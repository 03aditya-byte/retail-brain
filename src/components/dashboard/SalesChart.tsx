import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', actual: 4000, forecast: 4200 },
  { name: 'Feb', actual: 3000, forecast: 3100 },
  { name: 'Mar', actual: 5000, forecast: 4800 },
  { name: 'Apr', actual: 4500, forecast: 4600 },
  { name: 'May', actual: 6000, forecast: 5800 },
  { name: 'Jun', actual: 5500, forecast: 5700 },
  { name: 'Jul', actual: null, forecast: 6200 },
  { name: 'Aug', actual: null, forecast: 6800 },
  { name: 'Sep', actual: null, forecast: 7200 },
];

const SalesChart = () => {
  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">Sales Forecast</h3>
          <p className="text-sm text-muted-foreground">Actual vs AI Predicted Sales</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-xs text-muted-foreground">Actual</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-chart-4" />
            <span className="text-xs text-muted-foreground">Forecast</span>
          </div>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-4))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--chart-4))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-card)'
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Area 
              type="monotone" 
              dataKey="actual" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorActual)" 
            />
            <Area 
              type="monotone" 
              dataKey="forecast" 
              stroke="hsl(var(--chart-4))" 
              strokeWidth={2}
              strokeDasharray="5 5"
              fillOpacity={1} 
              fill="url(#colorForecast)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;
