
const Button = ({ children, variant = 'primary', size = 'default', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    ghost: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-500'
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    default: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = '', hover = false }) => (
  <div className={`bg-white rounded-lg shadow-lg border border-gray-200 ${hover ? 'hover:shadow-xl transition-shadow duration-300' : ''} ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};

const Progress = ({ value, max = 100, className = '' }) => (
  <div className={`bg-gray-200 rounded-full h-2 ${className}`}>
    <div 
      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
      style={{ width: `${Math.min((value / max) * 100, 100)}%` }}
    />
  </div>
);

const Tabs = ({ children, defaultValue, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  
  return (
    <div className={className}>
      {React.Children.map(children, child => 
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
};

const TabsList = ({ children, activeTab, setActiveTab }) => (
  <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8">
    {React.Children.map(children, child => 
      React.cloneElement(child, { activeTab, setActiveTab })
    )}
  </div>
);

const TabsTrigger = ({ value, children, activeTab, setActiveTab }) => (
  <button
    className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
      activeTab === value ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
    }`}
    onClick={() => setActiveTab(value)}
  >
    {children}
  </button>
);

const TabsContent = ({ value, children, activeTab }) => (
  activeTab === value ? <div>{children}</div> : null
);
