


echo '[CI] clean folders'
ls ./assembly/src module* -Recurse -Directory | % {
    echo "[CI] deleting $($_.FullName)"
    rm $_.FullName -Recurse -Force -Verbose
}

if (!(Test-Path ./assembly/src/components -PathType Container)) {
    New-Item -ItemType Directory -Force -Path ./assembly/src/components
}

('module1', 'module2') | %{
    cp "./$($_)/src/components/$($_)" './assembly/src/components/' -Recurse -Verbose
}

