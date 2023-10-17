import type { Animate, Bounce, Clamp, ClampZoom, Decelerate, Drag, Follow, MouseEdges, Pinch, Plugin, Snap, SnapZoom, Wheel } from './plugins';
import type { FederatedEvent } from '@pixi/events';
import type { Viewport } from './Viewport';
export declare class PluginManager {
    plugins: Partial<Record<string, Plugin>>;
    list: Array<Plugin>;
    readonly viewport: Viewport;
    constructor(viewport: Viewport);
    add(name: string, plugin: Plugin, index?: number): void;
    get(name: 'animate', ignorePaused?: boolean): Animate | undefined | null;
    get(name: 'bounce', ignorePaused?: boolean): Bounce | undefined | null;
    get(name: 'clamp', ignorePaused?: boolean): Clamp | undefined | null;
    get(name: 'clamp-zoom', ignorePaused?: boolean): ClampZoom | undefined | null;
    get(name: 'decelerate', ignorePaused?: boolean): Decelerate | undefined | null;
    get(name: 'drag', ignorePaused?: boolean): Drag | undefined | null;
    get(name: 'follow', ignorePaused?: boolean): Follow | undefined | null;
    get(name: 'mouse-edges', ignorePaused?: boolean): MouseEdges | undefined | null;
    get(name: 'pinch', ignorePaused?: boolean): Pinch | undefined | null;
    get(name: 'snap', ignorePaused?: boolean): Snap | undefined | null;
    get(name: 'snap-zoom', ignorePaused?: boolean): SnapZoom | undefined | null;
    get(name: 'wheel', ignorePaused?: boolean): Wheel | undefined | null;
    get<T extends Plugin = Plugin>(name: string, ignorePaused?: boolean): T | undefined | null;
    update(elapsed: number): void;
    resize(): void;
    reset(): void;
    removeAll(): void;
    remove(name: string): void;
    pause(name: string): void;
    resume(name: string): void;
    sort(): void;
    down(event: FederatedEvent): boolean;
    move(event: FederatedEvent): boolean;
    up(event: FederatedEvent): boolean;
    wheel(e: WheelEvent): boolean;
    refresh(name: string): void;
}
