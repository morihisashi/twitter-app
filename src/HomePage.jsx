import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Timeline from './components/timeline/Timeline';
import Widgets from './components/widget/Widgets';
import React from 'react';

export function HomePage() {
    return (
        <div className="app">
            {/* Sidebar */}
            <Sidebar />

            {/* Timeline */}
            <Timeline />

            {/* Widget */}
            <Widgets />
        </div>
    )
}
