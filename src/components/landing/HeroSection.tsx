import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Car, Zap, Shield, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              AI-Powered Smart Parking
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Transform Urban</span>
            <br />
            <span className="gradient-text">Parking Chaos</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Park-Prabandh uses intelligent AI agents to eliminate parking queues, 
            automate payments, and maximize space utilization for malls and commercial complexes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/park">
              <Button variant="hero" size="xl">
                <Car className="w-5 h-5 mr-2" />
                Start Parking
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="heroOutline" size="xl">
                View Dashboard
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: 'Faster Entry', value: '70%' },
              { label: 'Revenue Increase', value: '35%' },
              { label: 'Less Violations', value: '90%' },
              { label: 'User Satisfaction', value: '4.8★' },
            ].map((stat, i) => (
              <div 
                key={stat.label} 
                className="glass-card p-4 animate-slide-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
