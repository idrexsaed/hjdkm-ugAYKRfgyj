
import React from 'react';

export const WorldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

export const UploadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" x2="12" y1="3" y2="15" />
  </svg>
);

export const AreaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21.93,10.29,12,3,2.07,10.29A2,2,0,0,0,3.5,14H5V20a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V14h1.5a2,2,0,0,0,1.43-3.71Z"/></svg>
);

export const MountainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
);

export const DesertIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-4-3-5s-4-2-6-2-4 1-6 2-3 3-3 5a7 7 0 0 0 7 7Z"/><path d="M12 12v10M2 12h10m10 0h-10"/></svg>
);

export const WaterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 12s2-7 10-7 10 7 10 7-2 7-10 7-10-7-10-7Z"/><path d="M12 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
);

export const IceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2v3.31a4 4 0 0 1 0 7.38V22"/><path d="M12 22a4 4 0 0 1-4-4h8a4 4 0 0 1-4 4Z"/><path d="M12 2l-3.31 3.31a4 4 0 0 0 6.62 0L12 2Z"/><path d="M5.31 8.69 2 5.38a4 4 0 0 1 0-6.62L5.31 2"/><path d="M18.69 8.69 22 5.38a4 4 0 0 0 0-6.62L18.69 2"/></svg>
);

export const ForestIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22v-3"/><path d="M8.8 17.2a4.4 4.4 0 0 0 6.4 0"/><path d="M15.1 12.8a4.4 4.4 0 0 0-6.2 0"/><path d="M18 9a4.4 4.4 0 0 0-6.2 0l-3.6 3.6a4.4 4.4 0 0 0 0 6.2"/><path d="M6 9a4.4 4.4 0 0 1 6.2 0l3.6 3.6a4.4 4.4 0 0 1 0 6.2"/></svg>
);
