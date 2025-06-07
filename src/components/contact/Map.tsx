import React, { useEffect, useRef } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';

const amapKey = process.env.NEXT_PUBLIC_AMAP_KEY || '';

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: any;
    if (!mapRef.current) return;
    AMapLoader.load({
      key: amapKey,
      version: '2.0',
      plugins: ['AMap.ToolBar', 'AMap.Scale'],
    })
      .then((AMap) => {
        map = new AMap.Map(mapRef.current, {
          center: [105.724998, 34.580849], // 天水市坐标
          zoom: 15,
        });
        new AMap.Marker({
          position: [105.724998, 34.580849],
          map,
          title: '同城速达科技',
        });
        map.addControl(new AMap.ToolBar());
        map.addControl(new AMap.Scale());
      })
      .catch((e) => {
        if (mapRef.current) mapRef.current.innerHTML = '地图加载失败';
      });
    return () => {
      if (map) map.destroy();
    };
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: 360 }} />;
} 