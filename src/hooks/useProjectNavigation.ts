'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type UseProjectNavigationProps = {
  currentProjectId: string;
  allProjects: Array<{
    id: string;
    title: string;
    category: string;
  }>;
};

export const useProjectNavigation = ({ currentProjectId, allProjects }: UseProjectNavigationProps) => {
  const router = useRouter();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const currentIndex = allProjects.findIndex(p => p.id === currentProjectId);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allProjects.length - 1;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && hasPrev) {
        router.push(`/portfolio/${allProjects[currentIndex - 1].id}`);
      } else if (event.key === 'ArrowRight' && hasNext) {
        router.push(`/portfolio/${allProjects[currentIndex + 1].id}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, hasPrev, hasNext, allProjects, router]);

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance && hasNext) {
      router.push(`/portfolio/${allProjects[currentIndex + 1].id}`);
    } else if (distance < -minSwipeDistance && hasPrev) {
      router.push(`/portfolio/${allProjects[currentIndex - 1].id}`);
    }
  };

  return {
    hasPrev,
    hasNext,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};

