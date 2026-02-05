import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Smart Watch Pro', sales: 4500, color: 'hsl(var(--primary))' },
  { name: 'Wireless Headphones', sales: 3800, color: 'hsl(var(--chart-2))' },
  { name: 'Power Bank 20K', sales: 3200, color: 'hsl(var(--chart-3))' },
  { name: 'Bluetooth Speaker', sales: 2800, color: 'hsl(var(--chart-4))' },
  { name: 'USB-C Hub', sales: 2200, color: 'hsl(var(--chart-5))' },
];

const TopProducts = () => {
  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-display text-lg font-semibold text-foreground">Top Products</h3>
          <p className="text-sm text-muted-foreground">By revenue this month</p>
        </div>
      </div>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={true} vertical={false} />
            <XAxis 
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <YAxis 
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              width={120}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-card)'
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Sales']}
            />
            <Bar dataKey="sales" radius={[0, 4, 4, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopProducts;
