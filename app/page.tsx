import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Home, FileText } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100">
     

      {/* Header Section */}
      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-8">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <img src="https://res.cloudinary.com/dwyyrm9xw/image/upload/v1751279953/Screenshot_from_2025-06-30_16-08-29_ikocbz.png"/>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-white">
              <div className="font-bold text-lg">GET INFORMATION</div>
              <div className="font-bold text-lg">FROM BUSINESS REGISTERS</div>
              <div className="text-sm">(USRLE/USRIE)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto flex">
          <button className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium">
            <Home className="w-4 h-4" />
            MAIN PAGE
          </button>
          <button className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:bg-gray-50">
            <FileText className="w-4 h-4" />
            ABOUT THIS SERVICE
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            GET INFORMATION FROM BUSINESS REGISTERS (USRLE/USRIE)
          </h1>

          <div className="space-y-6">
            {/* Search Query */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SEARCH QUERY <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Input
                  placeholder="Indicate INN - Russian Tax ID or OGRN - Primary State Registration Number (OGRNIP - Primary State Registration Number of Individual Entrepreneur)"
                  className="w-full pr-8"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  ×
                </button>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center space-x-2">
              <Checkbox id="exact-match" />
              <label htmlFor="exact-match" className="text-sm text-gray-700">
                Search by exact match to name
              </label>
            </div>

            {/* Select Regions */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">SELECT REGIONS:</label>
              <div className="flex items-center gap-2">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select values from the directory" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="moscow">Moscow</SelectItem>
                    <SelectItem value="spb">Saint Petersburg</SelectItem>
                    <SelectItem value="all">All Regions</SelectItem>
                  </SelectContent>
                </Select>
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">?</span>
                </div>
              </div>
            </div>

            {/* Find Button */}
            <div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2">FIND</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">🦅</span>
                </div>
              </div>
              <div className="space-y-1">
                <a href="#" className="block text-blue-600 hover:underline text-sm">
                  All contacts
                </a>
                <a href="#" className="block text-blue-600 hover:underline text-sm">
                  Tech support
                </a>
              </div>
            </div>
            <div className="text-right text-sm text-gray-600 space-y-1">
              <p>The search result is downloadable in PDF.</p>
              <p>Use Adobe Acrobat Reader to open the file.</p>
              <p className="mt-4">© 2005-2025 FTS of Russia</p>
              <p>Version 1.8.11</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
