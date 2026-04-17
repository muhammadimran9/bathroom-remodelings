"use client";

import { useEffect, useRef } from "react";

interface GoogleMapProps {
  lat: number;
  lng: number;
  zoom?: number;
  title?: string;
  address?: string;
}

export function GoogleMap({ 
  lat, 
  lng, 
  zoom = 15, 
  title = "Our Location", 
  address = "" 
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // For now, we'll show a placeholder map
    // In a real implementation, you would load the Google Maps API
    if (mapRef.current) {
      mapRef.current.innerHTML = `
        <div class="w-full h-full bg-muted rounded-lg flex items-center justify-center">
          <div class="text-center p-8">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="font-serif text-lg font-semibold text-foreground mb-2">${title}</h3>
            <p class="text-muted-foreground text-sm">${address}</p>
            <p class="text-muted-foreground text-xs mt-2">Interactive map will load here</p>
          </div>
        </div>
      `;
    }
  }, [lat, lng, zoom, title, address]);

  return (
    <div 
      ref={mapRef}
      className="w-full h-96 rounded-lg overflow-hidden border border-border"
      style={{ minHeight: '400px' }}
    />
  );
}