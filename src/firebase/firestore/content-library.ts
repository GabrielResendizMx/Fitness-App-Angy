
'use client';

/**
 * @fileOverview Content Library Service for She is Fit.
 * Handles the management of video content metadata.
 */

import { 
  collection, 
  doc, 
  setDoc, 
  Firestore, 
  serverTimestamp 
} from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError, type SecurityRuleContext } from '@/firebase/errors';

export interface ContentLibraryInput {
  title: string;
  videoUrl: string; // Bunny.net link
  thumbnailUrl: string;
  description: string;
  muscleGroups: string[];
  season: 'Verano' | 'Navidad';
  duration: number;
}

/**
 * Uploads video metadata to the contentLibrary collection.
 * 
 * @param db Firestore instance.
 * @param input Video content data.
 */
export function uploadVideoContent(db: Firestore, input: ContentLibraryInput) {
  const contentRef = doc(collection(db, 'contentLibrary'));
  
  const data = {
    ...input,
    id: contentRef.id,
    createdAt: serverTimestamp(),
  };

  // Optimistic write - Non-blocking
  setDoc(contentRef, data)
    .catch(async (error) => {
      const permissionError = new FirestorePermissionError({
        path: contentRef.path,
        operation: 'create',
        requestResourceData: data,
      } satisfies SecurityRuleContext);

      errorEmitter.emit('permission-error', permissionError);
    });
}
