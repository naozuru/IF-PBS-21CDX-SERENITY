@extends('layouts.app')

@section('content')
<h1>Daftar Tanaman</h1>
<table>
    <thead>
        <tr>
            <th>Nama</th>
            <th>domain</th>
            <th>phylum</th>
            <th>subphylum</th>
            <th>class</th>
            <th>order</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($Plants as $Plant)
        <tr>
            <td>{{ $plant->name_id }}</td>
            <td>{{ $plant->name_en }}</td>
            <td>{{ $plant->domain }}</td>
            <td>{{ $plant->phylum }}</td>
            <td>{{ $plant->subphylum }}</td>
            <td>{{ $plant->class }}</td>
            <td>{{ $plant->order }}</td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection
