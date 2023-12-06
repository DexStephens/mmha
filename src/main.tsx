import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Survey } from './Survey.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/survey",
    element: <Survey />
  }
])

const fakeData: SurveyType = {
  dates: ["2023-11-29", "2023-11-30", "2023-12-1"],
  emotional: {
    scores: [5, 2, 3]
  },
  physical: {
    scores: [2, 4, 2]
  },
  spiritual: {
    scores: [3, 5, 8]
  }
}

interface SurveyType {
  dates: string[];
  emotional: {
    scores: number[]
  },
  physical: {
    scores: number[]
  },
  spiritual: {
    scores: number[]
  }
}

interface SurveyContext {
  surveys: SurveyType;
  setSurveys: React.Dispatch<React.SetStateAction<SurveyType>>;
}

export const SurveyContext = createContext<SurveyContext | undefined>(undefined)

export const SurveyProvider = ({ children }: { children: React.ReactNode}) => {
  const [surveys, setSurveys] = useState<SurveyType>(fakeData);

  return (
    <SurveyContext.Provider value={{surveys, setSurveys}}>
      {children}
    </SurveyContext.Provider>
  );
}

interface RoleContext {
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
}

const RoleContext = createContext<RoleContext | undefined>(undefined)

export const RoleProvider = ({ children } : { children: React.ReactNode}) => {
  const [role, setRole] = useState('missionary')

  return (
    <RoleContext.Provider value={{role, setRole}}>
      {children}
    </RoleContext.Provider>
  )
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RoleProvider>
      <SurveyProvider>
        <RouterProvider router={router} />
      </SurveyProvider>
    </RoleProvider>
  </React.StrictMode>,
)
