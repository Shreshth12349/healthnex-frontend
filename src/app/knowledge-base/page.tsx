'use client'

import {useLayoutEffect, useRef, useState} from 'react'

import {ChevronDownIcon, EllipsisVerticalIcon, MagnifyingGlassIcon} from '@heroicons/react/20/solid';
import {Dialog, DialogPanel, DialogTitle, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'

type Artifact = {
    id: number;
    name: string;
    type: string;
    status: string;
    trustScore: number;
};

const artifacts: Artifact[] = [
    {id: 1, name: 'Artifact A', type: 'Type 1', status: 'Active', trustScore: 90},
    {id: 2, name: 'Artifact B', type: 'Type 2', status: 'Inactive', trustScore: 75},
    {id: 3, name: 'Artifact C', type: 'Type 1', status: 'Active', trustScore: 85},
    {id: 4, name: 'Artifact D', type: 'Type 3', status: 'Under Review', trustScore: 60},
    {id: 5, name: 'Artifact E', type: 'Type 2', status: 'Active', trustScore: 95},
];

export default function KnowledgeBasePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const checkbox = useRef()
    const [checked, setChecked] = useState(false)
    const [selectedArtifacts, setSelectedArtifacts] = useState<Artifact[]>([]);
    const [selectedArtifact, setSelectedArtifact] = useState<Artifact>([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [indeterminate, setIndeterminate] = useState(false)

    useLayoutEffect(() => {
        const isIndeterminate = selectedArtifacts.length > 0 && selectedArtifacts.length < artifacts.length
        setChecked(selectedArtifacts.length === artifacts.length)
        setIndeterminate(isIndeterminate)
        checkbox.current.indeterminate = isIndeterminate
    }, [selectedArtifacts])

    function toggleAll() {
        setSelectedArtifacts(checked || indeterminate ? [] : artifacts)
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }

    const filteredArtifacts = artifacts
        .filter(artifact => artifact.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortDirection === 'asc') {
                return a.name.localeCompare(b.name);
            }
            return b.name.localeCompare(a.name);
        });

    const openDrawer = (artifact: Artifact) => {
        setSelectedArtifact(artifact);
        setIsDrawerOpen(true);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <div className="w-full min-h-full p-8 shadow-lg rounded-lg bg-white">
            <h2 className="text-2xl font-bold leading-6 text-gray-900">Knowledge Base</h2>
            <div className="mt-6 flex items-center mb-4">
                <div className="relative flex items-center">
                    <MagnifyingGlassIcon className="absolute left-3 h-5 w-5 text-gray-500" aria-hidden="true"/>
                    <input
                        type="text"
                        className="block w-full pl-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Search artifacts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {/*<button*/}
                {/*    type="button"*/}
                {/*    onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}*/}
                {/*    className="ml-4 inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"*/}
                {/*>*/}
                {/*    {sortDirection === 'asc' ? (*/}
                {/*        <SortAscendingIcon className="h-5 w-5" aria-hidden="true"/>*/}
                {/*    ) : (*/}
                {/*        <SortDescendingIcon className="h-5 w-5" aria-hidden="true"/>*/}
                {/*    )}*/}
                {/*    <span className="ml-2">{sortDirection === 'asc' ? 'Sort Descending' : 'Sort Ascending'}</span>*/}
                {/*</button>*/}
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                            <tr>
                                <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                                    <input
                                        type="checkbox"
                                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        ref={checkbox}
                                        checked={checked}
                                        onChange={toggleAll}
                                    />
                                </th>
                                <th scope="col"
                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                    <a href="#" className="group inline-flex">
                                        ID
                                        <span
                                            className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5"/>
                                        </span>
                                    </a>
                                </th>
                                <th scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    <a href="#" className="group inline-flex">
                                        Name
                                        <span
                                            className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
                                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5"/>
                                        </span>
                                    </a>
                                </th>
                                <th scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    <a href="#" className="group inline-flex">
                                        Type
                                        <span
                                            className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                                            />
                                        </span>
                                    </a>
                                </th>
                                <th scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    <a href="#" className="group inline-flex">
                                        Status
                                        <span
                                            className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                                            />
                                        </span>
                                    </a>
                                </th>
                                <th scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    <a href="#" className="group inline-flex">
                                        Trust Score
                                        <span
                                            className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                                            />
                                        </span>
                                    </a>
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-0">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                            {filteredArtifacts.map(artifact => (
                                <tr key={artifact.id}>
                                    <td className="relative px-7 sm:w-12 sm:px-6">
                                        {selectedArtifacts.includes(artifact) && (
                                            <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600"/>
                                        )}
                                        <input
                                            type="checkbox"
                                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            value={artifact.id}
                                            checked={selectedArtifacts.includes(artifact)}
                                            onChange={(e) =>
                                                setSelectedArtifacts(
                                                    e.target.checked
                                                        ? [...selectedArtifacts, artifact]
                                                        : selectedArtifacts.filter((a) => a !== artifact),
                                                )
                                            }
                                        />
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {artifact.id}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {artifact.name}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {artifact.type}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {artifact.status}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        {artifact.trustScore}
                                    </td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0">
                                        <button
                                            onClick={() => openDrawer(artifact)}
                                            className="text-indigo-600 hover:text-indigo-900"
                                        >
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
