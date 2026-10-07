import { useEffect } from 'react';

export const usePageMeta = (title: string, description?: string) => {
  useEffect(() => {
    document.title = `${title} | Nexovira AI Solution`;
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);
};
