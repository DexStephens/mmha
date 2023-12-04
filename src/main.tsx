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

const fakeData: SurveyType[] = [
  {
    date: "12/3/2023",
    score: 5
  },
  {
    date: "12/4/2023",
    score: 3
  }
]

interface SurveyType {
  date: string;
  score: number;
}

interface SurveyContext {
  surveys: SurveyType[];
  setSurveys: React.Dispatch<React.SetStateAction<SurveyType[]>>;
}

export const SurveyContext = createContext<SurveyContext | undefined>(undefined)

export const SurveyProvider = ({ children }) => {
  const [surveys, setSurveys] = useState<SurveyType[]>(fakeData);

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

export const RoleProvider = ({ children }) => {
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
